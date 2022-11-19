import { Header, Form, SearchFormButton, Input } from './Searchbar.styled';
import { BsSearch } from 'react-icons/bs';
import Container from 'components/Container';

export default function Searchbar({ onSubmit }) {
  const handleSubmit = e => {
    e.preventDefault();
    const value = e.target.query.value;
    onSubmit(value);
    e.target.reset();
  };
  return (
    <Container mb={4} as="header">
      <Header>
        <Form onSubmit={handleSubmit}>
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
