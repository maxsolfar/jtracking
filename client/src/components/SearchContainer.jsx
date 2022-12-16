import { Button, Flex } from '@chakra-ui/react';
import { FormRowSelect } from '.';
import { useAppContext } from '../context/appContext';

// md-links C/DADA/DDA      /> index.md , index2.md  ->
// md-links C/DADA/DDA/index.md --stats  -> archivo.md

const SearchContainer = () => {
  const {
    isLoading,
    searchStatus,
    searchType,
    sort,
    sortOptions,
    statusOptions,
    jobTypeOptions,
    handleChange,
    clearFilters,
  } = useAppContext();

  const handleSearch = (e) => {
    if (isLoading) return;
    handleChange({ name: e.target.name, value: e.target.value });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    clearFilters();
  };

  return (
    <>
      <form>
        <Flex w={"100%"} gap={4} alignItems={"flex-end"} flexWrap={["wrap", "nowrap", "nowrap", "nowrap"]}>
          <FormRowSelect
            labelText="Job Status"
            name="searchStatus"
            value={searchStatus}
            handleChange={handleSearch}
            list={['All', ...statusOptions]}
          />
          <FormRowSelect
            labelText='Job Type'
            name='searchType'
            value={searchType}
            handleChange={handleSearch}
            list={['All', ...jobTypeOptions]}
          />
{/*           <FormRowSelect
            labelText='Position'
            name='position'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          /> */}
          <FormRowSelect
            labelText='Sort'
            name='sort'
            value={sort}
            handleChange={handleSearch}
            list={sortOptions}
          />
          <Button
            disabled={isLoading}
            size={"100%"}
            h={"40px"}
            p={4}
            onClick={handleSubmit}
            fontWeight={"normal"}
            variant={"solid"}
            colorScheme={"mainPurple"}
            color={"brand.clear"}
          >
            Clear Filters
          </Button>
        </Flex>
      </form>
    </>
  );
};

export default SearchContainer;
