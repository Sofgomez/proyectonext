import Layout from "@/components/main/Layout";
import AcercaDeNosotros from '../components/AcercaDeNosotros';
import Servicios from '../components/Servicios';
import Opinion from "@/components/Opinion";


export default function Home() {
  return (
    <Layout>

      <div>
        <AcercaDeNosotros /> 
      </div>

      <div>
        <Servicios /> 
      </div>   

      <div>
        <Opinion /> 
      </div>  

    </Layout>
  );
}
