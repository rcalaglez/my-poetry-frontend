import { useEffect, useState } from "react";
import { getAllUseCase as getAll } from "../../../core/use-cases/get-all.use-case";
import { Poetry as PoetryResponse } from "../../../interfaces/poetry.response";
import Poetry from "./Poetry";
import "./poetry.css";

const PoetryList = () => {
  const [loading, setLoading] = useState<boolean>(false);
  const [poetries, setPoetries] = useState<PoetryResponse[]>([]);

  const getPoetries = async (): Promise<PoetryResponse[]> => {
    setLoading(true);
    try {
      const data = await getAll();
      return data ?? [];
    } catch (error) {
      return [];
    } finally {
      setLoading(false);
    }
  };

  useEffect(() => {
    getPoetries().then((data) => setPoetries(data));
  }, []);

  return (
    <main className="main-container">
      <section className="poetrys-container">
        {loading ? (
          <div id="barcontainer">
            <div id="meter">
              <p style={{ marginTop: 8 }}>Cargando...</p>
            </div>
          </div>
        ) : poetries.length === 0 ? (
          <p>No hay poemas escritos aun...</p>
        ) : (
          poetries.map((poetry: PoetryResponse) => {
            return <Poetry {...poetry} key={poetry.id} />;
          })
        )}
      </section>
    </main>
  );
};

export default PoetryList;
