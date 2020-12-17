import React from 'react';
import UserPageTemplate from '../../templates/UserPageTemplate';
import { connect } from 'react-redux';
import styled from 'styled-components';
import FilterButton from '../../components/atoms/FilterButton/FilterButton';
import NoteFiled from '../../components/organisms/NoteField/NoteField';
import IconButton from '../../components/atoms/IconButton/IconButton';
import AddNewNoteSidebar from '../../components/organisms/AddNewNote/AddNewNote';
import { Plus } from 'react-feather';
import { fetchNotes } from '../../actions';

const Wrapper = styled.div`
    display: grid;
    grid-template-rows:  60px auto;
    height: calc(100vh - 60px);
    padding-bottom: 10px; 
`

const CategoryFilter = styled.div`
    width: 100%;
    margin: 0 auto;
    display: grid;
    grid-template-columns: repeat(${props => props.numberOf}, min-content);
    grid-column-gap: 10px;
    overflow-x: scroll;
    
    &::-webkit-scrollbar {
        display: none;
    }
 
    @media (max-width: 800px) {
        padding-left: 60px;
    }
`;

const NotesGrid = styled.div`
    width: 100%;
    height: 100%;
    display: flex;
    flex-wrap: wrap;
    justify-content: flex-start;
    align-content: flex-start;
    overflow-y: scroll;

    &::-webkit-scrollbar-track
    {
        box-shadow: inset 0 0 6px rgba(0,0,0,0.3);
        border-radius: 10px;
        background-color: #25292E;
    }

    &::-webkit-scrollbar
    {
        width: 8px;
        background-color: #25292E;
    }

    &::-webkit-scrollbar-thumb
    {
        border-radius: 10px;
        box-shadow: inset 0 0 6px rgba(0,0,0,.3);
        background-color: #EB5757;
    }

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
        activeCategory: 'wszystkie',
        isSidebarActive: false
    }

    componentDidMount() {
        this.props.fetchNotes();
    }

    changeActive = name => (
        this.setState({
            activeCategory: name
        })
    )

    handleSidebarToggle = () => {
        this.setState(prevState => ({
            isSidebarActive: !prevState.isSidebarActive
        }))
    }

    render() {
        const allCategory = ['wszystkie', ...this.props.notes.map(note => note.category.toLowerCase())];
        let category = [...new Set(allCategory)];
        const filterNotes = this.props.notes.filter(note => note.category.toLowerCase() === this.state.activeCategory || this.state.activeCategory === 'wszystkie');

        return (
            <UserPageTemplate>
                <Wrapper>
                    <CategoryFilter numberOf={category.length + 1}>
                        {category.map((category) => <FilterButton key={category} click={() => this.changeActive(category)} active={category === this.state.activeCategory ? true : false}>{category}</FilterButton>)}
                    </CategoryFilter>
                    <NotesGrid numberOf={filterNotes.length}>
                        {filterNotes.length ?
                            filterNotes.map(note => <NoteFiled key={note._id} note={note} />)
                            :
                            <p>Brak notatek</p>}
                    </NotesGrid>
                </Wrapper>
                <IconFixed>
                    <IconButton onClick={this.handleSidebarToggle}>
                        <Plus size={30} strokeWidth={3} />
                    </IconButton>
                </IconFixed>
                <AddNewNoteSidebar isSidebarActive={this.state.isSidebarActive} toggleSidebar={this.handleSidebarToggle} />
            </UserPageTemplate>
        );
    }

}

const mapStateToProps = ({ notes }) => ({ notes })
const mapDispatchToProps = dispatch => ({
    fetchNotes: () => dispatch(fetchNotes())
})

export default connect(mapStateToProps, mapDispatchToProps)(NotesView);