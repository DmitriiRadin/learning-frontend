import React from 'react';
import { Preview, TutorialTask, TutorialTemplate } from '../../TutorialComponents/TutorialComponents';
import './StylingTables.css';

function StylingTables() {
  const bands = [{
    band: 'Buzzcocks',
    yearFordmed: 1967,
    numberOfAlbums: 9,
    mostFamousSong: "Ever fallen in love (with someone you shouldn't've)",
  }, {
    band: 'The Clash',
    yearFordmed: 1967,
    numberOfAlbums: 6,
    mostFamousSong: 'London Calling',
  }, {
    band: 'The Stranglers',
    yearFordmed: 1974,
    numberOfAlbums: 17,
    mostFamousSong: 'No More Heroe',
  }, {
    band: 'The Dmned',
    yearFordmed: 1976,
    numberOfAlbums: 10,
    mostFamousSong: 'Smash it up',
  }];

  const totalAlbums = bands
    .reduce((previousValue, band) => previousValue + band.numberOfAlbums, 0);

  return (
    <div className="StylingTables">
      <TutorialTemplate
        title="Styling tables"
        tutorialReference="https://developer.mozilla.org/en-US/docs/Learn/CSS/Building_blocks/Styling_tables"
      >
        <TutorialTask title="">
          <Preview>
            <table>
              <caption>A summary of the UK&apos;s most famous punk bands</caption>
              <thead>
                <tr>
                  <th scope="col">Band</th>
                  <th scope="col">Year formed</th>
                  <th scope="col">No. of Albums</th>
                  <th scope="col">Most famous song</th>
                </tr>
              </thead>
              <tbody>
                {
                    bands.map((band) => (
                      <tr>
                        <th scope="row">{band.band}</th>
                        <td>{band.yearFordmed}</td>
                        <td>{band.numberOfAlbums}</td>
                        <td>{band.mostFamousSong}</td>
                      </tr>
                    ))
                }
              </tbody>
              <tfoot>
                <tr>
                  <th scope="row" colSpan="2">Total albums</th>
                  <td colSpan="2">{totalAlbums}</td>
                </tr>
              </tfoot>
            </table>
          </Preview>
        </TutorialTask>
      </TutorialTemplate>
    </div>
  );
}

export default StylingTables;
