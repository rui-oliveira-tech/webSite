import React, { useEffect } from 'react'
import {
  useNavigate,
} from "react-router-dom";
import ReactGA from 'react-ga4';
import i18next from 'i18next'
import { useTranslation } from 'react-i18next'
import cookies from 'js-cookie'
import classNames from 'classnames'
import GlobeIcon from "./language.svg";
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Language.scss'
const languages = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
/*   {
    code: 'nl',
    name: 'Netherlands',
    country_code: 'nl',
  }, */
  {
    code: 'fr',
    name: 'Français',
    country_code: 'fr',
  },
  {
    code: 'pt',
    name: 'Portugal',
    country_code: 'pt',
  },
]


export default function Language() {
  const navigate = useNavigate();
  const currentLanguageCode = cookies.get('i18next') || 'en'
  const currentLanguage = languages.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()

  useEffect(() => {
    ReactGA.event({
      action: currentLanguageCode + "__action",
    });
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
    navigate('/' + `${currentLanguageCode}`);
  }, [currentLanguage, t])

  return (
    <>
      <div className="language">
        <div className="dropdown">
          <button
            className="btn btn-link dropdown-toggle"
            type="button"
            id="dropdownMenuButton1"
            data-bs-toggle="dropdown"
            aria-expanded="false"
          >
            <img className='globeIcon' src={GlobeIcon} alt="globeIcon" />
          </button>
          <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
            {languages.map(({ code, name, country_code }) => (
              <li key={country_code}>
                <button
                  className={classNames('dropdown-item', {
                    disabled: currentLanguageCode === code,
                  })}
                  onClick={() => {
                    i18next.changeLanguage(code)
                  }}
                >
                  <span
                    className={`flag-icon flag-icon-${country_code} mx-2`}
                    style={{
                      opacity: currentLanguageCode === code ? 0.5 : 1,
                    }}
                  ></span>
                  {name}
                </button>
              </li>
            ))}
          </ul>
        </div>
      </div>
    </>
  )
}
