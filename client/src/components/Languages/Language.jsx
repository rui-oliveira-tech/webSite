import React, { useEffect } from 'react'
import i18next from 'i18next'
import { useTranslation, withTranslation } from 'react-i18next';
// import cookies from 'js-cookie'
import classNames from 'classnames'
import withPublicImages from '../../hooks/withPublicImages'
import 'bootstrap/dist/js/bootstrap.js'
import 'bootstrap/dist/css/bootstrap.min.css'
import './Language.scss'
import { languageList } from '../../resource/lngs';




function Language(props) {
  const { images } = props;
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
        <img src={images.language} alt="globeIcon" />
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
                className={`flag-icon mx-2`}
                style={{
                  opacity: currentLanguageCode === code ? 0.5 : 1,
                  backgroundImage: `url(${images[country_code]})`
                  // bootstrap class was `flag-icon-${country_code}`
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

export default withPublicImages(require.context("../../../public/images/languages/"))(withTranslation()(Language));