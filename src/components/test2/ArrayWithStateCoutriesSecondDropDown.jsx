import { useState } from "react";


const ArrayWithStateCoutriesSecondDropDown = () => {


    const countries = [
        {
            name: 'India',
            value: 'IN',
            cities: [
                'Noida',
                'New Delhi',
                'Mau',
                'Mumbai',
                'Chennai'
            ]
        },
        {
            name: 'United States',
            value: 'UN',
            cities: [
                'California',
                'Texas',
                'Florida',
                'New York',
                'Las Vegas'
            ]
        },
        {
            name: 'Canada',
            value: 'CN',
            cities: [
                'Alberta',
                'British Columbia',
                'Ontario',
                'Quebec'
            ]
        },
        {
            name: 'Australia',
            value: 'AS',
            cities: [
                'New South Wales',
                'Victoria',
                'Queensland',
                'Western Australia'
            ]
        },
        {
            name: 'United Kingdom',
            value: 'UK',
            cities: [
                'England',
                'Scotland',
                'Wales',
                'Northern Ireland'
            ]
        }
    ];

    const [isLoadingState, setLoadingState] = useState(false);
    const [countryIndex, setCountryIndex] = useState(0);
   

    let message = '';
    //let countryIndex = '';

    function handleSelect(event) {
        console.log("State Selected  " + event.target.value); 
      //  console.log("State Selected  " + event.target.countries); 
        
        setLoadingState(true);
       // setCountry(countries[event.target.value]);
        setCountryIndex(event.target.value);
    }
if(isLoadingState){
    message =   <div> Cities list is : 
    <select>{
        countries[countryIndex].cities.map((item, index) => {
            return (<option key={index}>{item}</option>)
        })}
    </select>
   </div>
}




    return (

        <div>
            <h2> Select Coutries and City  </h2>

            <div>
                <select onChange={handleSelect}>
                    {
                        countries.map((item, index) => {
                            return (<option value={index} key={index} >{item.name}</option>)
                        })
                    }
                </select>




            </div>
            <div> {message}</div>
        </div>


    );



}

export default ArrayWithStateCoutriesSecondDropDown