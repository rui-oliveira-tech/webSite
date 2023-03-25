import React, { useEffect } from 'react'
import i18next from 'i18next'
import { useTranslation, withTranslation } from 'react-i18next';
import cookies from 'js-cookie'
import classNames from 'classnames'
import ImportAllImg from '../../images/importAll'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Language.scss'
import '../../public/images/languages/language.svg'

export const languageList = [
  {
    code: 'en',
    name: 'English',
    country_code: 'gb',
  },
  {
    code: 'nl',
    name: 'Netherlands',
    country_code: 'nl',
  },
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

export const languages = ['en', 'nl', 'fr', 'pt'];

function Language(props) {
  const images = ImportAllImg(require("../../public/images/languages/", false, /\.(png|jpe?g|svg)$/));
  const currentLanguageCode = props.i18n.language;
  const currentLanguage = languageList.find((l) => l.code === currentLanguageCode)
  const { t } = useTranslation()
  useEffect(() => {
    document.body.dir = currentLanguage.dir || 'ltr'
    document.title = t('app_title')
  }, [currentLanguage, t])

  const onClickChangeLanguage = (code) => () => {
    i18next.changeLanguage(code);
  }

  return (
    <div className="language dropdown">
      <button
        className="btn btn-link dropdown-toggle"
        type="button"
        id="dropdownMenuButton1"
        data-bs-toggle="dropdown"
        aria-expanded="false"
      >
        <img src={images["language"]} alt="globeIcon" />
      </button>
      <ul className="dropdown-menu" aria-labelledby="dropdownMenuButton1">
        {languageList.map(({ code, name, country_code }) => (
          <li key={country_code}>
            <button
              className={classNames('dropdown-item', {
                disabled: currentLanguageCode === code,
              })}
              onClick={onClickChangeLanguage(code)}
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
  )
}

export default withTranslation()(Language);