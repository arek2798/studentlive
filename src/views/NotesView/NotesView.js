import React from 'react';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FilterButton from '../../components/atoms/FilterButton/FilterButton';
import NoteFiled from '../../components/organisms/NoteField/NoteField';
import IconButton from '../../components/atoms/IconButton/IconButton';
import AddNewNoteSidebar from '../../components/organisms/AddNewNote/AddNewNote';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows:  60px auto;
    height: calc(100vh - 60px);
    padding-bottom: 10px; 
`

const CategoryFilter = styled.div`
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(${props => props.numberOf}, min-content);
    grid-column-gap: 10px;
`;

const NotesGrid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    overflow-y: scroll;

    > p { 
        text-align: center;
        font-size: 22px;
    }
`

const IconFixed = styled.div`
    position: fixed;
    bottom: 40px;
    right: 40px;
    z-index: 1000;
`


class NotesView extends React.Component {
    state = {
        activeCategory: 0,
        isSidebarActive: false
    }

    changeActive = id => (
        this.setState({
            activeCategory: id
        })
    )

    handleSidebarToggle = () => {
        this.setState(prevState => ({
            isSidebarActive: !prevState.isSidebarActive
        }))
    }

    render() {
        const category = this.props.notesCategories[this.state.activeCategory].name;
        let filterNotes;
        if (category !== "wszystkie") filterNotes = this.props.notes.filter(note => note.category === category);
        else filterNotes = this.props.notes;

        return (
            <>
                <Wrapper>
                    <CategoryFilter numberOf={this.props.notesCategories.length}>
                        {this.props.notesCategories.map((category) => <FilterButton key={category.id} click={() => this.changeActive(category.id)} active={category.id === this.state.activeCategory ? true : false}>{category.name}</FilterButton>)}
                    </CategoryFilter>
                    <NotesGrid numberOf={filterNotes.length}>
                        {filterNotes.length ?
                            filterNotes.map(note => <NoteFiled key={note.id} note={note} />)
                            :
                            <p>Brak notatek</p>}
                    </NotesGrid>
                </Wrapper>
                <IconFixed>
                    <IconButton onClick={this.handleSidebarToggle}>+</IconButton>
                </IconFixed>
                <AddNewNoteSidebar isSidebarActive={this.state.isSidebarActive} toggleSidebar={this.handleSidebarToggle} />
            </>
        );
    }

}

const mapStateToProps = ({ notesCategories, notes }) => ({ notesCategories, notes })

export default connect(mapStateToProps)(NotesView);