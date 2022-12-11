import 'package:flutter/material.dart';
import 'package:utem/screen/home.dart';
import 'package:utem/screen/login.dart';

void main() {
  runApp(const MyApp());
}

class MyApp extends StatelessWidget {
  const MyApp({super.key});

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
  bool _auth = false;

  @override
  Widget build(BuildContext context) {
    // return _auth ? const HomeScreen() : LoginScreen();
    return const LoginScreen();
  }
}
