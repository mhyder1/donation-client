const GoogleService = {
    autocomplete(input){
        const autocomplete = new window.google.maps.places.Autocomplete(input);
        autocomplete.addListener("place_changed", () => {
            const { map } = window;
            if(!map) // prevent this component from blowing up if tested without an attached map
              return;
            // height of the top area, plus 4rem for App (margin-top + padding-top + padding-bottom + margin-bottom)
            const offset = input.getBoundingClientRect().bottom
              + 4 * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
            console.log(`map-padding-top: ${offset}`);
            map.fitBounds(autocomplete.getPlace().geometry.viewport, { top: offset });
          });
    },

}
export default GoogleService


    //new window.google.maps.places.Autocomplete(this.searchBoxRef.current);
      