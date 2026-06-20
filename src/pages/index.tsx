import Head from "next/head";

export default function Home() {
  return (
    <>
      <Head>
        <title>Task Manager API</title>
        <meta
          name="description"
          content="Task Manager API built with Next.js, tRPC, PostgreSQL and Drizzle"
        />
      </Head>

      <main
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          minHeight: "100vh",
          flexDirection: "column",
        }}
      >
        <h1>Task Manager API</h1>
        <p>Backend is running successfully 🚀</p>
      </main>
    </>
  );
}