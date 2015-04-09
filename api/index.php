<?php
require_once 'DataBase.php';
$db = new DataBase();
if (isset($_GET['movie']) ) {
    $id    = filter_input(INPUT_GET, 'movie',FILTER_SANITIZE_NUMBER_INT );
    $movieS = $db->select(
        "t.name , tu.name 'place', s.time 'hour'", 
        "theatres t, schedule s, theatre_ubication tu", 
        "t.id = tu.theatre_id and s.theatre = tu.id and s.time > now() and s.movie_id = $id order by s.time"
    );
    $movie = $db->select(
        "description, name, youtube", 
        "movies", 
        "id = $id"
    );
    //select description, name, youtube from movies where id = 9
    
    printResults(array($movie, $movieS));
} else {
    $movies   = $db->select(
        "m.id, m.img , g.name 'genero'", 
        "genres g, movies m , schedule s", 
        "m.genre_id = g.id and s.movie_id = m.id and time > now() group by m.id"
    );
    printResults(array($movies));
    //select m.img, g.name from genres g, movies m , schedule s where m.genre_id = g.id and s.movie_id = m.id and time > now() group by m.id
}
