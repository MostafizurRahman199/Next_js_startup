import Form from 'next/form';
import SearchInput from './SearchInput';
import SearchButton from './SearchButton';

export default function SearchForm({query}: {query?: string}) {
  return (
    <Form
      action="/"
      className="w-full flex flex-col md:flex-row items-center gap-4"
      scroll={false}
    >
      <SearchInput />
      <SearchButton />
    </Form>
  );
}
