import { useQueries, useQuery } from "@tanstack/react-query"
import { fetchTypesList } from "../helpers/fetchTypesList";
import { fetchTypeDetails } from "../helpers/fetchTypeDetails";

export const useGetTypesListDetails = () => {

  const { data: typesList, isLoading: isLoadingTypesList, error: isErrorTypesList } = useQuery({
    queryKey: ["typesList"],
    queryFn: fetchTypesList,
    staleTime: Infinity,
    refetchOnWindowFocus: false,
  })

  const typesURLS = typesList?.results.filter(type => (
    type.name === "stellar" || type.name === "unknown" || type.name === "shadow"
    ? false
    : true
  ));

  const typesQueries = useQueries({
    queries: typesURLS
    ? typesURLS.map(typeURL => ({
      queryKey: ["type", typeURL.name],
      queryFn: () => fetchTypeDetails(typeURL.name),
      staleTime: Infinity,
      refetchOnWindowFocus: false,
    })) : []
  })
  
  const typesDetails = typesQueries.map(query => query.data).filter(Boolean);
  const isLoadingTypeDetails = typesQueries.some(query => query.isLoading);
  const isErrorTypeDetails = typesQueries.some(query => query.isError);

  return {
    typesDetails,
    isLoading : isLoadingTypesList || isLoadingTypeDetails,
    isError: isErrorTypesList || isErrorTypeDetails,
  };
}

