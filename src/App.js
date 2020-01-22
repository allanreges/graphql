import React from "react";
import logo from "./logo.svg";
import "./App.css";
import { useQuery } from "@apollo/react-hooks";
import gql from "graphql-tag";

import MoreVertIcon from "@material-ui/icons/MoreVert";

const GET_POKEMON_INFO = gql`
  {
    getParticipants {
      id
      name
      files {
        id
        src
      }
    }
  }
`;

function App() {
  const { data, loading, error } = useQuery(GET_POKEMON_INFO);

  if (loading) return <p>Loading...</p>;
  if (error) return <p>Error</p>;
  console.log(data);

  return (
    <React.Fragment>
      {data.getParticipants.map((item, index) => {
        return (
          <div>
            <h1>{item.name}</h1>
            {item.files.length > 0 && (
              <ul
                style={{
                  listStyle: "none",
                  display: "flex",
                  justifyContent: "space-evenly",
                  background: "#eaeaea",
                  padding: "25px",
                  border: "5px solid black"
                }}
              >
                {item.files.map(item => {
                  return (
                    <li>
                      <img
                        style={{ maxWidth: 150, border: "5px solid #efea" }}
                        src={item.src}
                      ></img>
                    </li>
                  );
                })}
              </ul>
            )}
          </div>
        );
      })}
    </React.Fragment>
  );
}

export default App;
