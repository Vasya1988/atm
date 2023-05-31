import classes from './Title.module.sass'

const Title = ({tag, text}) => {
    const Tag = tag || 'h1';
    return (
        <Tag className={classes.Title}>
            {text}
        </Tag>
    )
}
export default Title;