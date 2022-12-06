import { useState } from "react";
import BarChart from "./BarChart";
import AreaChart from "./AreaChart";
import { useAppContext } from "../context/appContext";
import { Button, Flex, Heading } from "@chakra-ui/react";

const ChartsContainer = () => {
  const [barChart, setBarChart] = useState(true);
  const { monthlyApllications: data } = useAppContext();
  return (
    <Flex>
      <Heading>Monthly Applications</Heading>
      <Button type='button' onClick={() => setBarChart(!barChart)}>
        {barChart ? 'AreaChart' : 'BarChart'}
      </Button>
      {barChart ? <BarChart data={data} /> : <AreaChart data={data} />}
    </Flex>
  )
}

export default ChartsContainer;