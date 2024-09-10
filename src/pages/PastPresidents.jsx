import React from "react";
import { Helmet } from "react-helmet-async";
import PastPresidentImage from "../components/PastPresidentImage";
import ocampo1 from "../assets/Rotary Members/Ocampo (1).png";
import ocampo2 from "../assets/Past Presidents Logos/ocampo.png";
import sandoval1 from "../assets/Rotary Members/Sandoval.png";
import sandoval2 from "../assets/Past Presidents Logos/sandoval.png";
import funcion1 from "../assets/Rotary Members/Funcion.png";
import funcion2 from "../assets/Past Presidents Logos/funcion.png";
import tabora1 from "../assets/Rotary Members/Tabora.png";
import tabora2 from "../assets/Past Presidents Logos/tabora.png";
import azcuna1 from "../assets/Rotary Members/Azcuna.png";
import azcuna2 from "../assets/Past Presidents Logos/azcuna.png";
import penson1 from "../assets/Rotary Members/Penson (1).png";
import penson2 from "../assets/Past Presidents Logos/penson.png";
import giron1 from "../assets/Past Presidents Logos/giron.png";
import gacutan1 from "../assets/Rotary Members/Gacutan.png";
import gacutan2 from "../assets/Past Presidents Logos/gacutan.png";
import veguillas1 from "../assets/Rotary Members/Veguillas.png";
import veguillas2 from "../assets/Past Presidents Logos/veguillas.png";
import uriarte1 from "../assets/Rotary Members/Uriarte.png";
import uriarte2 from "../assets/Past Presidents Logos/uriarte.png";
import argente1 from "../assets/Past Presidents Logos/argente.png";
import lozano1 from "../assets/Past Presidents Logos/lozano.png";
import mendez1 from "../assets/Past Presidents Logos/mendez.png";
import aguinaldo1 from "../assets/Past Presidents Logos/aguinaldo.png";
import afzelius1 from "../assets/Rotary Members/Honorary Afzelius.png";
import afzelius2 from "../assets/Past Presidents Logos/afzelius.png";
import encarnacion1 from "../assets/Rotary Members/Encarnacion.png";
import encarnacion2 from "../assets/Past Presidents Logos/encarnacion.png";
import abad1 from "../assets/Rotary Members/Abad.png";
import abad2 from "../assets/Past Presidents Logos/abad.png";
import geli1 from "../assets/Past Presidents Logos/geli.png";
import espino1 from "../assets/Past Presidents Logos/espino.png";
import martinez1 from "../assets/Past Presidents Logos/martinez.png";
import ortiz1 from "../assets/Past Presidents Logos/ortiz.png";
import francisco1 from "../assets/Rotary Members/Francisco.png";
import francisco2 from "../assets/Past Presidents Logos/francisco.png";
import han1 from "../assets/Past Presidents Logos/han.png";
import tugade1 from "../assets/Rotary Members/Tugade.png";
import tugade2 from "../assets/Past Presidents Logos/tugade.png";
import manaig1 from "../assets/Rotary Members/Manaig (1).png";
import manaig2 from "../assets/Past Presidents Logos/manaig.png";
import molina1 from "../assets/Rotary Members/Molina.png";
import molina2 from "../assets/Past Presidents Logos/francisco molina.png";
import badr1 from "../assets/Rotary Members/Badr (1).png";
import badr2 from "../assets/Past Presidents Logos/badr.png";
import zara1 from "../assets/Rotary Members/Zara.png";
import zara2 from "../assets/Past Presidents Logos/zara.png";
import dionisio1 from "../assets/Rotary Members/Molina (1).png";
import dionisio2 from "../assets/Past Presidents Logos/dionisio molina jr.png";
import licarte1 from "../assets/Rotary Members/Licarte (1).png";
import licarte2 from "../assets/Past Presidents Logos/licarte.png";
import deVera1 from "../assets/Rotary Members/De Vera (1).png";
import deVera2 from "../assets/Past Presidents Logos/de vera.png";
import flor1 from "../assets/Rotary Members/Flor (1).png";
import flor2 from "../assets/Past Presidents Logos/flor.png";
import flor3 from "../assets/Past Presidents Logos/flor1.png";
import lee1 from "../assets/Rotary Members/Lee (1).png";
import lee2 from "../assets/Past Presidents Logos/lee.png";
import molina3 from "../assets/Past Presidents Logos/francisco molina1.png";
import besitan1 from "../assets/Rotary Members/Besitan.png";
import besitan2 from "../assets/Past Presidents Logos/besitan.png";
import pua1 from "../assets/Rotary Members/Pua.png";
import pua2 from "../assets/Past Presidents Logos/pua.png";
import parilla1 from "../assets/Rotary Members/Parilla (1).png";
import parilla2 from "../assets/Past Presidents Logos/parilla.png";
import cornista1 from "../assets/Rotary Members/Cornista (1).png";
import cornista2 from "../assets/Past Presidents Logos/cornista.png";
import monzon1 from "../assets/Rotary Members/Monzon (1).png";
import monzon2 from "../assets/Past Presidents Logos/monzon.png";
import guinto1 from "../assets/Rotary Members/Guinto.png";
import guinto2 from "../assets/Past Presidents Logos/guinto.png";
import catud1 from "../assets/Rotary Members/Catud (1).png";
import catud2 from "../assets/Past Presidents Logos/catud.png";
import manapsal1 from "../assets/Rotary Members/Manapsal (1).png";
import manapsal2 from "../assets/Past Presidents Logos/manapsal.png";
import hernandez1 from "../assets/Rotary Members/Hernandez (1).png";
import hernandez2 from "../assets/Past Presidents Logos/hernandez.png";

const PastPresidents = () => {
  const ocampo = [{ src: ocampo1 }, { src: ocampo2 }];
  const sandoval = [{ src: sandoval1 }, { src: sandoval2 }];
  const funcion = [{ src: funcion1 }, { src: funcion2 }];
  const tabora = [{ src: tabora1 }, { src: tabora2 }];
  const azcuna = [{ src: azcuna1 }, { src: azcuna2 }];
  const penson = [{ src: penson1 }, { src: penson2 }];
  const giron = [{ src: giron1 }];
  const gacutan = [{ src: gacutan1 }, { src: gacutan2 }];
  const veguillas = [{ src: veguillas1 }, { src: veguillas2 }];
  const uriarte = [{ src: uriarte1 }, { src: uriarte2 }];
  const argente = [{ src: argente1 }];
  const lozano = [{ src: lozano1 }];
  const mendez = [{ src: mendez1 }];
  const aguinaldo = [{ src: aguinaldo1 }];
  const afzelius = [{ src: afzelius1 }, { src: afzelius2 }];
  const encarnacion = [{ src: encarnacion1 }, { src: encarnacion2 }];
  const abad = [{ src: abad1 }, { src: abad2 }];
  const geli = [{ src: geli1 }];
  const espino = [{ src: espino1 }];
  const martinez = [{ src: martinez1 }];
  const ortiz = [{ src: ortiz1 }];
  const francisco = [{ src: francisco1 }, { src: francisco2 }];
  const han = [{ src: han1 }];
  const tugade = [{ src: tugade1 }, { src: tugade2 }];
  const manaig = [{ src: manaig1 }, { src: manaig2 }];
  const molinaFirst = [{ src: molina1 }, { src: molina2 }];
  const badr = [{ src: badr1 }, { src: badr2 }];
  const zara = [{ src: zara1 }, { src: zara2 }];
  const dionisio = [{ src: dionisio1 }, { src: dionisio2 }];
  const licarte = [{ src: licarte1 }, { src: licarte2 }];
  const deVera = [{ src: deVera1 }, { src: deVera2 }];
  const florFirst = [{ src: flor1 }, { src: flor2 }];
  const florSecond = [{ src: flor1 }, { src: flor3 }];
  const lee = [{ src: lee1 }, { src: lee2 }];
  const molinaSecond = [{ src: molina1 }, { src: molina3 }];
  const besitan = [{ src: besitan1 }, { src: besitan2 }];
  const pua = [{ src: pua1 }, { src: pua2 }];
  const parilla = [{ src: parilla1 }, { src: parilla2 }];
  const cornista = [{ src: cornista1 }, { src: cornista2 }];
  const monzon = [{ src: monzon1 }, { src: monzon2 }];
  const guinto = [{ src: guinto1 }, { src: guinto2 }];
  const catud = [{ src: catud1 }, { src: catud2 }];
  const manapsal = [{ src: manapsal1 }, { src: manapsal2 }];
  const hernandez = [{ src: hernandez1 }, { src: hernandez2 }];

  return (
    <>
      <Helmet>
        <title>Past Presidents </title>
      </Helmet>

      <div className="flex flex-col w-full bg-gray-100 py-8 px-4 text-center">
        <h1 className="font-dinnext font-black text-[#050038] text-4xl sm:text-5xl md:text-6xl lg:text-8xl mb-4">
          PAST PRESIDENTS
        </h1>
      </div>

      <div className="flex flex-col justify-center items-center mt-5 text-center">
        <div className="bg-[#050038] px-8 py-4 rounded-lg mx-auto">
          <h1 className="font-serif font-black text-2xl sm:text-3xl md:text-5xl text-white leading-tight">
            CHARTER PRESIDENT
          </h1>
        </div>
        <div className="mt-5">
          <PastPresidentImage
            images={ocampo}
            name="Rene S. Ocampo"
            tagLine="Take Time to Serve"
            ry="1980-1981"
          />
        </div>
      </div>

      <div className="w-3/4 sm:w-2/3 md:w-1/2 lg:w-1/3 border-b-2 border-gray-400 my-8 mx-auto"></div>

      <div className="flex justify-center mt-5 px-4">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6 lg:gap-8 w-full max-w-6xl pb-10">
          {/* Sandoval Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={sandoval}
              name="Alberto A. Sandoval"
              tagLine="Word Understanding & Peace through Rotary"
              ry="1981-1982"
            />
          </div>

          {/* Salvador Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={funcion}
              name="SALVADOR Y. FUNCION"
              tagLine="Mankind is One – Buide Bridges of Friendship Throughout the world"
              ry="1982-1983"
            />
          </div>

          {/* TABORA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={tabora}
              name="JOSE Q. TABORA"
              tagLine="Share Rotary – Serve People"
              ry="1983-1984"
            />
          </div>

          {/* AZCUNA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={azcuna}
              name="ADOLFO S. AZCUNA"
              tagLine="Discovery a New World of Service"
              ry="1984-1985"
            />
          </div>

          {/* PENSON Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={penson}
              name="ANGELO DWIGHT L. PENSON"
              tagLine="You Are The Key"
              ry="1985-1986"
            />
          </div>

          {/* GIRON Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={giron}
              name="ZIEGFREDO A. GIRON"
              tagLine="Rotary Brings Hope"
              ry="1986-1987"
            />
          </div>

          {/* GACUTAN Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={gacutan}
              name="ARTURO G. GACUTAN"
              tagLine="Rotarians - United Services - Dedicated to Peace"
              ry="1987-1988"
            />
          </div>

          {/* VEGUILLAS Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={veguillas}
              name="JESUS MA. V. VEGUILLAS"
              tagLine="Put life in Rotary - Your Life"
              ry="1988-1989"
            />
          </div>

          {/* URIARTE Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={uriarte}
              name="Alberto B. Uriarte"
              tagLine="Enjoy Rotary"
              ry="1989-1990"
            />
          </div>

          {/* ARGENTE Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={argente}
              name="Lauro A. Argente"
              tagLine="Honor Rotary with Faith and Enthusiasm"
              ry="1990-1991"
            />
          </div>

          {/* LOZANO Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={lozano}
              name="Orlando O. Lozano"
              tagLine="Look Beyond"
              ry="1991-1992"
            />
          </div>

          {/* MENDEZ Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={mendez}
              name="Danilo O. Mendez"
              tagLine="Real Happiness is Helping Others"
              ry="1992-1993"
            />
          </div>

          {/* AGUINALDO Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={aguinaldo}
              name="Mario A. Aguinaldo"
              tagLine="Believe in What You Do - Do What You Believe In"
              ry="1993-1994"
            />
          </div>

          {/* AFZELIUS Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={afzelius}
              name="Edwin O. Afzelius Jr."
              tagLine="Be a Friend"
              ry="1994-1995"
            />
          </div>

          {/* ENCARNACION Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={encarnacion}
              name="Elseo S. Encarnacion"
              tagLine="Act with Integrity, Serve with Love, Work for Peace"
              ry="1995-1996"
            />
          </div>

          {/* ABAD Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={abad}
              name="Maxy S. Abad"
              tagLine="Build the Future with Action and Vision"
              ry="1996-1997"
            />
          </div>

          {/* GELI Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={geli}
              name="Tito N. Geli"
              tagLine="Show Rotary Cares"
              ry="1997-1998"
            />
          </div>

          {/* ESPINO Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={espino}
              name="Leo L. Espino"
              tagLine="Follow Your Rotary Dream"
              ry="1998-1999"
            />
          </div>

          {/* MARTINEZ Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={martinez}
              name="Ezekiel D. Martinez"
              tagLine="Act with Consistency, Credibility, Continuity"
              ry="1999-2000"
            />
          </div>

          {/* ORTIZ Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={ortiz}
              name="Orlando L. Ortiz"
              tagLine="Create Awareness Take Action"
              ry="2000-2001"
            />
          </div>

          {/* FRANCISCO Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={francisco}
              name="Rodolfo C. Francisco"
              tagLine="Mankind is Our Business"
              ry="2001-2002"
            />
          </div>

          {/* HAN Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={han}
              name="Salter Han"
              tagLine="Sow the Seeds of Love"
              ry="2002-2003"
            />
          </div>

          {/* TUGADE Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={tugade}
              name="Billy C. Tugade"
              tagLine="Lend a Hand"
              ry="2003-2004"
            />
          </div>

          {/* MANAIG Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={manaig}
              name="Francisco T. Manaig"
              tagLine="Celebrate Rotary"
              ry="2004-2005"
            />
          </div>

          {/* MOLINA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={molinaFirst}
              name="Francisco T. Molina"
              tagLine="Service Above Self"
              ry="2005-2006"
            />
          </div>

          {/* BADR Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={badr}
              name="Mohammad Yasin Badr"
              tagLine="Lead the Way"
              ry="2006-2007"
            />
          </div>

          {/* ZARA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={zara}
              name="Edgardo C. Zara"
              tagLine="Rotary Shares"
              ry="2007-2008"
            />
          </div>

          {/* MOLINA JR. Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={dionisio}
              name="Dionisio T. Molina Jr."
              tagLine="Makes Dreams Real"
              ry="2008-2009"
            />
          </div>

          {/* LICARTE Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={licarte}
              name="Enrico V. Licarte"
              tagLine="The Future of Rotatry Is In Your Hands"
              ry="1981-1982"
            />
          </div>

          {/* De Vera Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={deVera}
              name="Harold T. De Vera"
              tagLine="Building Communities, Bridging Continents"
              ry="2010-2011"
            />
          </div>

          {/* FLOR Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={florFirst}
              name="Hilbert M. Flor"
              tagLine="Reach Within to Embrace Humanity"
              ry="2011-2012"
            />
          </div>

          {/* FLOR Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={florSecond}
              name="Hilbert M. Flor"
              tagLine="Peace Through Services"
              ry="2012-2013"
            />
          </div>

          {/* LEE Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={lee}
              name="Edwin L. Lee"
              tagLine="Engage Rotary Change Lives"
              ry="2013-2014"
            />
          </div>

          {/* MOLINA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={molinaSecond}
              name="Francisco T. Molina"
              tagLine="Light Up Rotary"
              ry="2014-2015"
            />
          </div>

          {/* BESITAN Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={besitan}
              name="Manuel P. Besitan"
              tagLine="Be a Gift to the World"
              ry="2015-2016"
            />
          </div>

          {/* PUA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={pua}
              name="Jaime M. Pua"
              tagLine="Rotary Serving Humanity"
              ry="2016-2017"
            />
          </div>

          {/* PARILLA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={parilla}
              name="Efren R. Parilla"
              tagLine="Making Difference"
              ry="2017-2018"
            />
          </div>

          {/* CORNISTA Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={cornista}
              name="Archival V. Cornista"
              tagLine="Be the Inspiration"
              ry="2018-2019"
            />
          </div>

          {/* MONZON Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={monzon}
              name="Ronillo M. Monzon"
              tagLine="Rotary Connects the World"
              ry="2019-2020"
            />
          </div>

          {/* GUINTO Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={guinto}
              name="Roderick J. Guinto"
              tagLine="Rotary Opens Opportunity"
              ry="2020-2021"
            />
          </div>

          {/* CATUD Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={catud}
              name="Socrates R. Catud"
              tagLine="Serve to Change Lives"
              ry="2021-2022"
            />
          </div>

          {/* MANAPSAL Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={manapsal}
              name="Josep Aron Rey L. Manapsal"
              tagLine="Imagine Rotary"
              ry="2022-2023"
            />
          </div>

          {/* HERNANDEZ Images */}
          <div className="flex justify-center">
            <PastPresidentImage
              images={hernandez}
              name="Rafael Hernandez"
              tagLine="Create Hope in the World"
              ry="2023-2024"
            />
          </div>

          {/* Add other PastPresidentImage components as needed */}
        </div>
      </div>
    </>
  );
};

export default PastPresidents;
