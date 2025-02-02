import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { ListOfPokemons } from "./components/ListOfPokemons";
import { ReactQueryDevtools } from "@tanstack/react-query-devtools";
import { PokeRouters } from "./routers/PokeRouters";

const queryClient = new QueryClient()

export const App = () => {

  return (
    <QueryClientProvider client={queryClient}>
      {/* <ListOfPokemons /> */}
      <PokeRouters />
      <ReactQueryDevtools initialIsOpen={false} />
    </QueryClientProvider>
  )
}
