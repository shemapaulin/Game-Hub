import { SimpleGrid, Text } from "@chakra-ui/react";
import UseGames, {  } from "../hooks/useGames";
import GameCards from "./GameCards";
import GameCardSkeleton from "./GameCardSkeleton";
import { GameQuery } from "../App";

export interface GenreProps{
  gameQuery:GameQuery
}

const GameGrid = ({gameQuery}:GenreProps) => {
  const { data, error, isLoading } = UseGames(gameQuery);
  const Skeletons = [1, 2, 3, 4, 5, 6, 7];
  return (
    <>
      {error && <Text>{error}</Text>}
      <SimpleGrid
        columns={{ sm: 1, md: 2, lg: 3, xl: 4 }}
        padding="10px"
        spacing={7}
      >
        {isLoading &&
          Skeletons.map((skeleton) => <GameCardSkeleton key={skeleton} />)}
        {data.map((game) => (
          <GameCards key={game.id} game={game} />
        ))}
      </SimpleGrid>
    </>
  );
};

export default GameGrid;
