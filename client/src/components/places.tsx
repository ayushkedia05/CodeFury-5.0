import Reviews from "./Review";
import { createContext } from "react";
import Cookies from 'universal-cookie';
import { useNavigate } from "react-router-dom";
import usePlacesAutocomplete, {
    getGeocode,
    getLatLng,
  } from "use-places-autocomplete";
  import {
    Combobox,
    ComboboxInput,
    ComboboxPopover,
    ComboboxList,
    ComboboxOption,
  } from "@reach/combobox";
  import "@reach/combobox/styles.css";
  
  type PlacesProps = {
    setOffice: (position: google.maps.LatLngLiteral) => void;
  };

   
export const cookies = new Cookies();

  const palceContext = createContext();
  
  export default function Places({ setOffice }: PlacesProps) {
    const {
      ready,
      value,
      setValue,
      suggestions: { status, data },
      clearSuggestions,
    } = usePlacesAutocomplete();
    
    const handleSelect = async (val: string) => {
      setValue(val, false);
      clearSuggestions();
      
      const results = await getGeocode({ address: val });
      const { lat, lng } = await getLatLng(results[0]);
      setOffice({ lat, lng });
    };

    function func(e){
      cookies.set('location',value);
      console.log(cookies.get('location'));
      setValue(e.target.value)    
        
    }

    let navigate = useNavigate();
    return (
      <>
      <Combobox onSelect={handleSelect}>
        <ComboboxInput
          value={value}
          onChange={func}
          disabled={!ready}
          className="combobox-input"
          placeholder="Search address"
          />
        <p>{value}</p>
        <ComboboxPopover>
          <ComboboxList>
            {status === "OK" &&
              data.map(({ place_id, description }) => (
                <ComboboxOption key={place_id} value={description} />
                ))}
          </ComboboxList>
        </ComboboxPopover>
      </Combobox>
    

      {/* <button onClick={() => navigate("/allevents")} > See Reviews  </button> */}

       
                </>
      
    );
  }
  