import axios from "axios";
import { useEffect, useState } from "react";
import Header from "../Header/Header";
import DataTable from "../Home/Home";
export default function DataFetching() {
  const [data, setData] = useState([]);
  const [trashedData, setTrashData] = useState([]);
  const [homeData, setHomeData] = useState([]);
  const [isTrashed, setisTrashed] = useState(false);
   const [inputValue,setInput]=useState('');
   const [deleted,setdeleted]=useState(false);
   const [clickedTrash,setclickedtrash]=useState(false)
   const [clickedHome,setclickedHome]=useState(true)

  useEffect(() => {
    getUserDetails();
  }, []);

  function getUserDetails() {
    let res = axios.get("https://jsonplaceholder.org/users");
    res.then((response) => {
      setData(response.data);
      setHomeData(response.data);
    });
  }
  const handleDeletebtn = (ind) => {
    const updatededData = data.filter((_, index) => index !== ind);
    setData(updatededData);
    setHomeData(updatededData);
    const deletedItem = data.find((_, index) => index === ind);
    setTrashData([...trashedData, deletedItem]);
  };
  const handleTrash = () => {
    setclickedtrash(true)
    setclickedHome(false)
    if (trashedData.length === 0) {
      setdeleted(true)
    }
    else{
      setData(trashedData);
      setisTrashed(true);
    }
  };
  
  const handleHome = () => {
    setData(homeData);
    setisTrashed(false);
    setdeleted(false)
    setclickedtrash(false)
    setclickedHome(true)
  };
  const handleRestore = (ind) => {
    const restoredData = data.filter((_, index) => index !== ind);
    setData(restoredData);
    setTrashData(restoredData);
    const readdedItem = data.find((_, index) => index === ind);
    setHomeData([...homeData, readdedItem]);
  };
  
  const handleSearch=(event)=>{
    setInput(event.target.value)
  }
  
  const filteredData = data.filter(item => {
    // If input value is empty, return true to include all items
    if (inputValue.trim() === '') {
      return true;
    }

     return item.firstname.toLowerCase().includes(inputValue.trim().toLowerCase())||item.lastname.toLowerCase().includes(inputValue.trim().toLowerCase())
    // );
  });
 
  return (
    <div>
      <Header
        onclickTrash={handleTrash}
        onclickHome={handleHome}
        onSearch={handleSearch} 
        clickedTrash={clickedTrash}
        clickedHome={clickedHome}

      />
      <DataTable
        FetchedData={filteredData}
        handleDelete={handleDeletebtn}
        trashed={isTrashed}
        RestoredData={handleRestore}
        deleted={deleted}
      />
    </div>
  );
}
