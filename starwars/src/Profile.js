import React, { useEffect, useState } from "react";
import axios from "axios";
import ProfileCardInfo from "./ProfileCardInfo";

export default function ProfileCard(props) {
  const [data, setData] = useState([]);
  console.log(data);

  useEffect(() => {
    axios.get(`https://swapi.co/api/people`).then(response => {
      setData(response.data.results);
    });
  }, []);

  return data.map(person => {
    return (
      <ProfileCardInfo
        key={person}
        name={person.name}
        gender={person.gender}
        eye_color={person.eye_color}
      />
    );
  });
}
