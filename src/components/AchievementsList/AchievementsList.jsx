import PropTypes from 'prop-types'

export default function AchievementsList({visibleAch}) {

    const countByTheme = visibleAch.reduce((acc, item) => {
      const { theme } = item;
      if (acc[theme]) {
      acc[theme] += 1;
      } else {
      acc[theme] = 1;
      }
      return acc;
    }, {});
    
   
    const { Education = 0,
        Busywork = 0,
        Relaxation = 0,
        Music = 0,
        Social = 0,
        Sport = 0,
        Recreational = 0 } = countByTheme;

    return (<div>
        <p>Education: {Education}</p>
        <p>Busywork: {Busywork}</p>
        <p>Relaxation: {Relaxation}</p>
        <p>Music: {Music}</p>
        <p>Social:{Social}</p>
        <p>Sport: {Sport}</p>
        <p>Recreational: {Recreational}</p> 
    </div>);

};

AchievementsList.propTypes = {
    visibleAchL: PropTypes.arrayOf(
         PropTypes.shape({
            _id: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            date: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
            done: PropTypes.bool.isRequired,
            theme: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
         })
   )
};