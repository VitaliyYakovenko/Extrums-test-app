import PropTypes from 'prop-types'
import {Card,CardContent, Typography , Button} from '@mui/material';
import css from "./IdeasList.module.css";

export default function IdeasList({ideas, getCurrentIdea}) {
   
    
    return (ideas.map((idea,index) => (
        <Card
            className={css.ideaItem}
            key={idea._id}>
            <CardContent>
            <Typography
            variant='h4'
            component="p"
            mb={3}        
            className={css.ideaAction}>
            {idea.action}
            </Typography>
                
            <Typography
            variant='h5'
            style={{ fontWeight: 700}}        
            component="p"        
            mb={6}        
            >
            {idea.theme}
            </Typography>
                
            <Button
            disabled={ideas.status === "selected"}
            className={css.getIdeaBtn}
            variant='contained'
            onClick={() => getCurrentIdea(idea._id, index)}
            style={{ backgroundColor: idea.status === "wait" 
            ? `#1976d2`
            : `#1212cb`            
            }}       
            >
            {idea.status === "wait"
            ? <span className={css.getIdeaBtnText}>Get Idea</span>
            : <span className={css.getIdeaBtnTextSelected}>Idea Selected</span>
             }        
            </Button>
                
            </CardContent>
        </Card>
    )));
};



IdeasList.propTypes = {
    ideas: PropTypes.arrayOf(
         PropTypes.shape({
            _id: PropTypes.string.isRequired,
            action: PropTypes.string.isRequired,
            date: PropTypes.oneOfType([PropTypes.string, PropTypes.oneOf([null])]),
            done: PropTypes.bool.isRequired,
            theme: PropTypes.string.isRequired,
            status: PropTypes.string.isRequired
         })
    ), getCurrentIdea: PropTypes.func.isRequired,
};