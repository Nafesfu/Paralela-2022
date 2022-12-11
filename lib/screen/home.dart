
import 'package:flutter/material.dart';

class HomeScreen extends StatelessWidget {
  const HomeScreen({super.key});

  // This widget is the root of your application.
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      title: 'Ejemplo UTEM',
      theme: ThemeData(
        primarySwatch: Colors.blue,
      ),
      home: const MyHomePage(title: 'Ingreso con correo UTEM'),
    );
  }
}

class MyHomePage extends StatefulWidget {
  final String title;

  const MyHomePage({super.key, required this.title});

  @override
  State<MyHomePage> createState() => _MyHomePageState();
}


class _MyHomePageState extends State<MyHomePage> {
 
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(
        title: Text(widget.title),
      ),
      body: Center(
        child: Column(
          mainAxisAlignment: MainAxisAlignment.center,
          children: <Widget>[
            const Text(
              'voto',
            ),
            TextButton(onPressed: () => onPresseds() , child: const Text('no al paro')),
            TextButton(onPressed: () => nulo() , child: const Text('nulo a la')),
            TextButton(onPressed: () => onPressed() , child: const Text('si al paro')),
          ],
        ),
      ),
    );
  }
  
  onPresseds() {
    print('si');
  }
  nulo() {
    print('no');
  }
  
  onPressed() {
    print('nulo');
  }
}
