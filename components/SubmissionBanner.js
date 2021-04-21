import styles from '../styles/Home.module.css'
export default function SubmissionBanner(props) {

  

  return (

   <div className="bg-green-500">
     <div className={styles.landing}>
     <link rel="stylesheet" href="https://fonts.googleapis.com/css?family=Montserrat" />
     <h1 className="px-5 py-5 mb-2 uppercase font-bold text-3xl text-white">{props.submissionMesssage}</h1>
   </div>
   </div>
  )
}