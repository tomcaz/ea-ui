import Form from 'react-bootstrap/Form';

export const SearchComponent = ({handleSearch}) => (
    <Form.Control
        type="text"
        id="search"
        aria-describedby="search input"
        placeholder="Search..."
        onChange={e=> handleSearch(e.target.value)}
  />
)