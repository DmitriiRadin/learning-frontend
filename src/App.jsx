import React from 'react';
import {
  BrowserRouter as Router,
  Routes,
  Route,
} from 'react-router-dom';
import './App.css';
import MainContainer from './components/MainContainer/MainContainer';
import BackgroundAndBorders from './components/Pages/BackgroundAndBorders/BackgroundAndBorders';
import BoxModel from './components/Pages/BoxModel/BoxModel';
import CSSValuesAndUnits from './components/Pages/CSSValuesAndUnits/CSSValuesAndUnits';
import Home from './components/Pages/Home/Home';
import OverflowingContent from './components/Pages/OverflowingContent/OverflowingContent';
import Selectors from './components/Pages/Selectors/Selectors';
import SizingItemsInCSS from './components/Pages/SizingItemsInCSS/SizingItemsInCSS';
import TextDirections from './components/Pages/TextDirections/TextDirections';
import * as urls from './urls';

function App() {
  return (
    <MainContainer>
      <Router>
        <div>
          {/* A <Switch> looks through its children <Route>s and
            renders the first one that matches the current URL. */}
          <Routes>
            <Route path={urls.SelectorsUrl} element={<Selectors />} />
            <Route path={urls.BoxModelUrl} element={<BoxModel />} />
            <Route path={urls.BackgroundAndBordersUrl} element={<BackgroundAndBorders />} />
            <Route path={urls.TextDirectionsUrl} element={<TextDirections />} />
            <Route path={urls.OverflowingContentUrl} element={<OverflowingContent />} />
            <Route path={urls.CSSValuesAndUnitsUrl} element={<CSSValuesAndUnits />} />
            <Route path={urls.SizingItemsInCSSUrl} element={<SizingItemsInCSS />} />
            <Route path={urls.HomeUrl} element={<Home />} />
          </Routes>
        </div>
      </Router>
    </MainContainer>
  );
}

export default App;
