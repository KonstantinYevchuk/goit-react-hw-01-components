import PropTypes from 'prop-types';
// import css from 'components/Statistics/Statistics.module.css';
import { Section, Title, List, Item, Label, Percent } from './Statistics.styled';


export const Statistics = ({title, stats}) => {
    return (
    <Section>
    {title && <Title>{title}</Title>}
    <List key={stats.id}>
    {stats.map(stat => {
        return <Item key={stat.id}>
          <Label>{stat.label}</Label>
          <Percent>%{stat.percentage}</Percent>
          </Item>
    })}
    </List>
    </Section>
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
