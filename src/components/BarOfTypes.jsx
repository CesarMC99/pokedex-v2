import { Link } from "react-router";
import { useGetTypesListDetails } from "../hooks/useGetTytpesListDetails"

export const BarOfTypes = () => {

  const {typesDetails, isLoading, isError} = useGetTypesListDetails();

  if (isLoading) return <div>Loading...</div> ;

  if (isError) return <div>Error occurred while fetching users.</div>;

  return (
    <ul className="flex">
      {
        typesDetails.map(type => (
          <li key={type.id}>
            <Link to={`/type/${type.name}`}>
              <div className="w-[30px] h-[30px] bg-cover rounded-4xl" style={{backgroundImage: `url("${type.sprites}")`}}/>
            </Link>
          </li>
        ))
      }
    </ul>
  )
}