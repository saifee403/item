import Item from "./component/Item"
import ItemDate from "./component/ItemDate"


function App() {


   const response = [
    {
      itemName:"saif",
      day:"26",
      month:"May",
      year:"2001"
    },
    {
      itemName:"mujeeb",
      day:"10",
      month:"april",
      year:"2003"
    },
    {
      itemName:"attiq",
      day:"29",
      month:"july",
      year:"1994"
    },
    {
      itemName:"zaman",
      day:"14",
      month:"August",
      year:"1988"
    },
   ]


  return (
    <>
      <h1>practice</h1>
      <Item name={response[0].itemName}/>
      <ItemDate day={response[0].day} month={response[0].month} year={response[0].year}/>
    </>
  )
}

export default App
