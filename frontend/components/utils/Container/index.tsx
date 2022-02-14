import classNames from 'classnames'

interface IContainer {
   children
   id?: string
   className?: string
}

const Container = ({ children, className, id }: IContainer) => {
   const containerClass = classNames(
      className,
      'px-3 md:px-6 lg:px-12 xl:px-24 py-8 lg:py-12'
   )
   return (
      <div className={containerClass} id={id}>
         {children}
      </div>
   )
}

export default Container
