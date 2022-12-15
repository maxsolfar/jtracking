import { useAppContext } from '../context/appContext';
import { HiChevronDoubleLeft, HiChevronDoubleRight } from 'react-icons/hi';
import { Button, Flex, Box } from '@chakra-ui/react';

const PageBtnContainer = () => {
  const { numOfPages, page, changePage } = useAppContext();
  const pages = Array.from({ length: numOfPages }, (_, index) => {
    return index + 1;
  });
  const prevPage = () => {
    let newPage = page - 1;
    if (newPage < 1) {
      newPage = numOfPages;
    }
    changePage(newPage);
  };
  const nextPage = () => {
    let newPage = page + 1;
    if (newPage > numOfPages) {
      newPage = 1;
    }
    changePage(newPage);
  };

  return (
    <Flex gap={2} w={"100%"} justifyContent={"center"} mt={4}>
      <Button onClick={prevPage}>
        <HiChevronDoubleLeft />
        prev
      </Button>
      <Flex gap={2}>
        {pages.map((pageNumber) => {
          return (
            <Button
              type="button"
              color={pageNumber === page ? 'brand.secondary' : null}
              fontSize={pageNumber === page ? 'xl' : "md"}
              fontWeight={"bold"}
              /* className={pageNumber === page ? 'pageBtn active' : 'pageBtn'} */
              key={pageNumber}
              onClick={() => changePage(pageNumber)}
            >
              {pageNumber}
            </Button>
          );
        })}
      </Flex>
      <Button onClick={nextPage}>
        next
        <HiChevronDoubleRight />
      </Button>
    </Flex>
  );
};

export default PageBtnContainer;
