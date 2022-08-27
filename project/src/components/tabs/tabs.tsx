import { useState } from 'react';
import { Film } from '../../types/film';
import { Review } from '../../types/review';
import DetailsTab from './details-tab';
import { CurrentTab } from './enums';
import OverviewTab from './overview-tab';
import ReviewTab from './review-tab';

type TabsProps = {
  film: Film;
  reviews?: Review[];
}

const activeTabClass = 'film-nav__item--active';
const TABS = [
  {
    name: CurrentTab.Overview,
    title: 'Overview',
    element: OverviewTab
  },
  {
    name: CurrentTab.Details,
    title: 'Details'
  },
  {
    name: CurrentTab.Reviews,
    title: 'Reviews'
  },
];

function Tabs({film, reviews}: TabsProps): JSX.Element {
  const [currentTab, setCurrentTab] = useState(CurrentTab.Overview);

  return (
    <div className="film-card__desc">
      <nav className="film-nav film-card__nav">
        <ul className="film-nav__list">
          {
            TABS.map(({name, title}) => (
              <li
                className={`film-nav__item ${currentTab === name ? activeTabClass : ''}`}
                key={name}
              >
                <a
                  href="#"
                  className="film-nav__link"
                  onClick={(event) => {
                    event.preventDefault();
                    setCurrentTab(name);
                  }}
                >
                  {title}
                </a>
              </li>
            ))
          }
        </ul>
      </nav>
      {
        currentTab === CurrentTab.Overview && (
          <OverviewTab film={film} />
        )
      }
      {
        currentTab === CurrentTab.Details && (
          <DetailsTab film={film} />
        )
      }
      {
        currentTab === CurrentTab.Reviews && (
          <ReviewTab reviews={reviews} />
        )
      }
    </div>
  );
}

export default Tabs;

