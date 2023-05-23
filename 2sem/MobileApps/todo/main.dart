import 'package:flutter/material.dart';
import "dart:io";

void main() {
  runApp(Todo());
}

class Todo extends StatelessWidget {
  @override
  Widget build(BuildContext context) {
    return MaterialApp(
      home: TodoList(),
      theme: ThemeData(
        colorScheme: ColorScheme.fromSeed(seedColor: Colors.deepOrange),
      ),
    );
  }
}

class TodoList extends StatefulWidget {
  @override
  _TodoListState createState() => _TodoListState();
}

class _TodoListState extends State<TodoList> {
  // save data
  final List<String> _todoList = <String>[];
  // text field
  final TextEditingController _textFieldController = TextEditingController();
  @override
  Widget build(BuildContext context) {
    return Scaffold(
      appBar: AppBar(title: const Text('Список задач')),
      body: ListView(
          children: ListTile.divideTiles(context: context, tiles: _getItems())
              .toList()),

      // add items to the to-do list
      floatingActionButton: FloatingActionButton(
          onPressed: () => _displayDialog(context),
          tooltip: 'Добавить задачу',
          child: Icon(Icons.add)),
    );
  }

  void _addTodoItem(String title) {
    // Wrapping it inside a set state will notify
    // the app that the state has changed
    setState(() {
      _todoList.add(title);
    });
    _textFieldController.clear();
  }

  // this Generate list of item widgets
  Widget _buildTodoItem(String title, int index) {
    return ListTile(
        title:
            Row(mainAxisAlignment: MainAxisAlignment.spaceBetween, children: [
      Column(children: [Text(title)]),
      Column(
        children: [
          IconButton(
            icon: Icon(Icons.delete),
            iconSize: 24,
            color: Colors.red,
            alignment: Alignment.centerRight,
            onPressed: () {
              _removetile(index);
            },
          )
        ],
      )
    ]));
  }

  void _removetile(int index) {
    setState(() {
      _todoList.removeAt(index);
    });
  }

  // display a dialog for the user to enter items
  Future<AlertDialog> _displayDialog(BuildContext context) async {
    // alter the app state to show a dialog
    return showDialog(
        context: context,
        builder: (BuildContext context) {
          return AlertDialog(
            title: const Text('Добавление задачи'),
            content: TextField(
              controller: _textFieldController,
              decoration:
                  const InputDecoration(hintText: 'Введите текст задачи'),
            ),
            actions: <Widget>[
              // add button
              TextButton(
                child: const Text('Добавить задачу'),
                onPressed: () {
                  Navigator.of(context).pop();
                  _addTodoItem(_textFieldController.text);
                },
              ),
              // Cancel button
              TextButton(
                child: const Text('Отменить'),
                onPressed: () {
                  Navigator.of(context).pop();
                },
              )
            ],
          );
        }).then((value) => value ?? false);
  }

  // iterates through our todo list title
  List<Widget> _getItems() {
    final List<Widget> todoWidgets = <Widget>[];
    for (String title in _todoList) {
      int listItemIndex = _todoList.indexOf(title);
      print(listItemIndex);
      todoWidgets.add(_buildTodoItem(title, listItemIndex));
    }
    return todoWidgets;
  }
}
