import PropTypes from 'prop-types';
import css from 'components/Statistics/Statistics.module.css';

const randomColor = {
    backgroundColor: getRandomHexColor()
};

function getRandomHexColor() {
    return `#${Math.floor(Math.random() * 16777215)
      .toString(16)
      .padStart(6, 0)}`;
  };

export const Statistics = ({title, stats}) => {
    return (
    <section className={css.statistics}>
    <h2 className={css.title}>{title}</h2>
    <ul className={css["stat-list"]} key={stats.id}>
    {stats.map(stat => {
        return <li className={css.item} style={randomColor} key={stat.id}>
          <span className={css.label}>{stat.label}</span>
          <span className={css.percentage}>%{stat.percentage}</span>
        </li>
    })}
    </ul>
  </section>
    );
}

Statistics.propTypes = {
    title: PropTypes.string,
    stats: PropTypes.arrayOf(PropTypes.exact({
        id: PropTypes.string.isRequired,
        label: PropTypes.string.isRequired,
        percentage: PropTypes.number.isRequired
      })) 
};
