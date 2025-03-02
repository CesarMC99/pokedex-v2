import { Link } from "react-router";
import { useGetTypesListDetails } from "../hooks/useGetTytpesListDetails"
import { Loader } from "./Loader";

export const BarOfTypes = () => {

  const {typesDetails, isLoading, isError} = useGetTypesListDetails();

  if (isLoading) return <Loader />;

  if (isError) return <div>Error occurred while fetching users.</div>;

  return (
    <ul className="flex gap-2 bg-cyan-900 p-2 border-3 border-white rounded-2xl">
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