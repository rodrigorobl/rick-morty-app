import { Character } from "../character";
import { Pagination } from "../pagination";
import { Container, ConstainerList } from "./style";

export const CharacterList = ({ data, fetchPreviousPage, fetchNextPage }) => {
  return (
    <Container>
      <ConstainerList>
        {data?.results?.map((character) => (
          <Character character={character} />
        ))}
      </ConstainerList>
      <Pagination pagination={data?.info} 
      fetchNextPage={(url) => fetchNextPage(url)}
      fetchPreviousPage={(url) => fetchPreviousPage(url)}
      />
    </Container>
  );
};
