import { useEffect, useState } from "react";
import { FaSearch } from "react-icons/fa";
import Axios from "axios";
import "./Search.css";

export const Search = ({ setResults }) => {
  const [input, setInput] = useState("");
  const [data, setData] = useState([]);

  // *****************this is approach 1***********************
  // *****************for api calling using useEffect**********

  // useEffect(() => {
  //   Axios.get("// "<your api key here>"
  // https://jsonplaceholder.typicode.com/ go to this link and use it.")
  //     .then((response) => setData(response.data))
  //     .catch((error) => console.error("error occured", error));
  // }, []);

  // ******************* approach 2 using fetch (without Axios)**********

  // const performSearch = (value) => {
  //   fetch("// "<your api key here>"
  // https://jsonplaceholder.typicode.com/ go to this link and use it.")
  //     .then((response) => response.json())
  //     .then((json) => {
  //       const result = json.filter((user) => {
  //         return user && user.name && user.name.toLowerCase().includes(value);
  //       });
  //       console.log(result);
  //     });
  // };

  // ********************** approach 3 ***********************

  const performSearch = async () => {
    try {
      let response = await Axios
        .get
        // "<your api key here>"
        // https://jsonplaceholder.typicode.com/ go to this link and use it.
        ();
      setData(response.data);

      // ******************* we can use inside function too********
      // const result = response.data;
      // let res = result.filter((user) => {
      //   // console.log(user);
      //   return user && user.name && user.name.toLowerCase().includes(input.toLowerCase());
      // });
      // console.log(res);
    } catch (e) {
      console.log(e.response);
    }
  };

  const handleSearching = () => {
    performSearch();
    const result = data.filter((user) => {
      return (
        user &&
        user.name &&
        user.name.toLowerCase().includes(input.toLowerCase())
      );
    });
    // console.log(result);
    setResults(result);
  };

  function handleChange(value) {
    setInput(value);
    handleSearching();
    // performSearch(value);
  }

  return (
    <>
      <div id="searchBar">
        <FaSearch id="search-icon" />
        <input
          type="text"
          placeholder="Search"
          value={input}
          onChange={(e) => handleChange(e.target.value)}
        />
      </div>
    </>
  );
};
