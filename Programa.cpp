#include <iostream>
#include <fstream>
#include <string>
#include <vector>
#include <ctime>
using namespace std;

int main(int argc, char * argv[]) {

  double tiempo_inicial = clock(); //medimos el tiempo de ejecucion

  vector < pair < string, int > > datos; //vector de pares de datos

  int cant_accidentes = 0; //variable para calcular la cantidad de accidentes
  string fecha; //variable para almacenar la fecha

  //leemos el archivo
  ifstream archivo("datos_examen.csv");
  if (archivo.is_open()) {
    while (!archivo.eof()) {
      archivo >> fecha >> cant_accidentes;
      datos.push_back(make_pair(fecha, cant_accidentes));
    }
    archivo.close();
  }

  //obtenemos la fecha ingresada por el usuario mediante cin
  string fecha_entrada;

  //cin >> fecha_entrada;
  fecha_entrada = "10/12/2022";
  //calculamos la cantidad de accidentes
  for (int i = 0; i < datos.size(); i++) {
    if (datos[i].first == fecha_entrada) {
      cant_accidentes += datos[i].second;
    }
  }

  //mostramos el resultado
  cout << fecha_entrada << " " << cant_accidentes << endl;

  double tiempo_final = clock(); //medimos el tiempo de ejecucion
  cout << "Tiempo de ejecucion: " << (tiempo_final - tiempo_inicial) / CLOCKS_PER_SEC << " segundos." << endl; //mostramos el tiempo de ejecucion

  return 0;
}