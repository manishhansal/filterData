import "./styles.css";
import { data } from "./constant";
import { useCallback, useEffect, useState } from "react";
export default function App() {
  const [state, setState] = useState(data);
  const [gender, setGender] = useState("");
  const [country, setCountry] = useState("");
  const [filterData, setFilterData] = useState(data);

  const filterFnc = useCallback(() => {
    const filtered = state.filter((item) => {
      const genderFilter =
        item?.gender?.toLowerCase()?.indexOf(gender?.toLowerCase()) > -1;
      const countryFilter =
        item?.country?.toLowerCase()?.indexOf(country?.toLowerCase()) > -1;

      return genderFilter && countryFilter;
    });

    setFilterData(filtered);
  }, [gender, country]);

  useEffect(() => {
    filterFnc();
  }, [gender, country, filterFnc]);
  return (
    <div className="App">
      <h1>Filter Data</h1>
      <div style={{ display: "flex", gap: "10px" }}>
        {/* <div>
          <h3>Filter by category</h3>
        </div> */}
        <div>
          <h3>Filter by gender</h3>
          <select onChange={(e) => setGender(e.target.value)}>
            <option>Male</option>
            <option>Female</option>
            <option>Bigender</option>
            <option>Polygender</option>
            <option>Genderqueer</option>
            <option>Agender</option>
            <option>Genderfluid</option>
          </select>
        </div>
        {/* <div>
          <h3>Filter by interests</h3>
        </div> */}
        <div>
          <h3>Filter by country</h3>
          <select onChange={(e) => setCountry(e.target.value)}>
            {state.map((item) => (
              <option key={item.id}>{item.country}</option>
            ))}
          </select>
        </div>
      </div>

      <table>
        <tr>
          <th>First Name</th>
          <th>Last Name</th>
          <th>Email</th>
          <th>Gender</th>
          <th>Country</th>
          <th>Skills</th>
          <th>Job Title</th>
          <th>Race</th>
        </tr>

        {filterData.map((item) => (
          <tr key={item.id}>
            <td>{item.first_name}</td>
            <td>{item.last_name}</td>
            <td>{item.email}</td>
            <td>{item.gender}</td>
            <td>{item.country}</td>
            <td>{item.skills}</td>
            <td>{item.job_title}</td>
            <td>{item.race}</td>
          </tr>
        ))}
      </table>
    </div>
  );
}
