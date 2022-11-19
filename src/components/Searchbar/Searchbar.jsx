import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Container from 'components/Container';
import { Component } from 'react';

class Searchbar extends Component {
  handleSubmit = e => {
    e.preventDefault();
    const value = e.target.elements.query.value;
    this.props.onSubmit(value);
    e.target.reset();
  };

  render() {
    return (
      <Container mb={4} as="header">
        <Header>
          <Form onSubmit={this.handleSubmit}>
            <SearchFormButton type="submit">
              <BsSearch />
            </SearchFormButton>

            <Input
              type="text"
              name="query"
              autocomplete="off"
              autoFocus
              placeholder="Search images and photos"
            />
          </Form>
        </Header>
      </Container>
    );
  }
}

export default Searchbar;
