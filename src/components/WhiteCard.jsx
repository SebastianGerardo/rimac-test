import PropTypes from 'prop-types'

export const WhiteCard = ({ children, className }) => {
  return (
    <article className={`bg-white rounded-2xl p-4 shadow-lg ${className}`}>
      {children}
    </article>
  )
}

WhiteCard.propTypes = {
  children: PropTypes.node,
  className: PropTypes.string
}