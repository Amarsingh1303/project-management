import React from "react";
import { useQuery } from "@apollo/client";
import { ClientRow } from "./ClientRow";
import { GET_CLIENTS } from "../queries/clientQueries";

export const Clients = () => {
  const { loading, error, data } = useQuery(GET_CLIENTS);
  if (loading) <h1>Loading...</h1>;

  if (error) <h1>error...</h1>;
  return (
    <div>
      {!loading && !error && (
        <table className="table table-hover mt-3">
          <thead>
            <tr>
              <th>Name</th>
              <th>Email</th>
              <th>Phone</th>
              <th></th>
            </tr>
          </thead>
          <tbody>
            {data.clients.map((client) => (
              <ClientRow key={client.id} client={client} />
            ))}
          </tbody>
        </table>
      )}
    </div>
  );
};
