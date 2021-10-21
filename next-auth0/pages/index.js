import Head from "next/head";
import styles from "../styles/Home.module.css";
import { useUser } from "@auth0/nextjs-auth0";

export default function Home() {
  const {user, error, isLoading} = useUser();	

  if(user){
	return (
		<div className={styles.container}>
		  <Head>
			<title>LHD Next auth0</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		  </Head>
	
		  <main className={styles.main}>
			<h1> Hello {user.email} you are loggedin to LHD-Next-auth0 </h1>
			<a href="/api/auth/logout" >Logout</a>
		  </main>
		</div>
	  );
  }
  else{
	return (
		<div className={styles.container}>
		<Head>
			<title>LHD Next auth0</title>
			<meta name="description" content="Generated by create next app" />
			<link rel="icon" href="/favicon.ico" />
		</Head>

		<main className={styles.main}>
			<h1>Welcome to LHD-Next-auth0 </h1>
			<a href="/api/auth/login" >Login</a>
		</main>
		</div>
	);

  }
}
