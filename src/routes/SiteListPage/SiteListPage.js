import React, { Component } from 'react'
import SearchForm from '../../components/SearchForm/SearchForm';
import './SiteListPage.css';

class SiteListPage extends Component {

  static defaultProps = {
    location: {},
    history: {
      push: () => { },
    },
  }

  uiRef = React.createRef();

  componentDidMount() {
    this.postRender();
  }

  componentDidUpdate() {
    this.postRender();
  }

  setMapBoundsFromQuery(map, query) {
    if((typeof(query) !== 'string'))
      return;
    const args = query.substring(1).split(',');
    if(args.length < 4)
      return;
    // height of the top area, plus 4rem for App (margin-top + padding-top + padding-bottom + margin-bottom)
    const offset = this.uiRef.current.getBottom()
      + 4 * parseFloat(window.getComputedStyle(document.documentElement).fontSize);
    const sw = { lat: +args[3], lng: +args[0] };
    const ne = { lat: +args[1], lng: +args[2] };
    const bounds = new window.google.maps.LatLngBounds(sw, ne);
    map.fitBounds(bounds, { top: offset });
  }

  postRender() {
    const { map } = window;
    if(!map) // prevent this component from blowing up if tested without an attached map
      return;
    this.setMapBoundsFromQuery(map, this.props.location.search);
  }

  render() {
    return (
      <>
        {/* keeping this div around for now because it may help us animate the position of the
            SearchForm when entering this route */}
        <div className="landingText"></div>
        <SearchForm uiRef={this.uiRef} />
      </>
    );
  }
}

export default SiteListPage;
