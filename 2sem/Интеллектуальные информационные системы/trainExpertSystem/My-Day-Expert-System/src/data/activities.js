const variants = [
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Понедельник Пятница' }
    }, // 1
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Понедельник Пятница' }
    }, // 2
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Понедельник Четверг' }
    }, // 3
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '17:00-17:30 Вторник Четверг' }
    }, // 4
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '17:00-18:00 Вторник Четверг' }
    }, // 5
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Вторник Пятница' }
    }, // 6
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '15:00-15:30 Суббота или воскресенье' }
    }, // 7
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '15:00-16:00 Суббота или воскресенье' }
    }, // 8
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:00-17:00 Суббота или воскресенье' }
    }, // 9
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Вторник Пятница' }
    }, // 10
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Понедельник Пятница' }
    }, // 11
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Понедельник Суббота' }
    }, // 12
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Вторник Четверг' }
    }, // 13
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Вторник Четверг' }
    }, // 14
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Вторник Пятница' }
    }, // 15
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Понедельник Четверг' }
    }, // 16
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Среда Пятница' }
    }, // 17
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Вторник Пятница' }
    }, // 18
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Четверг Суббота' }
    }, // 19
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Суббота или воскресенье' }
    }, // 20
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Понедельник Четверг' }
    }, // 21
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Понедельник Среда' }
    }, // 22
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Среда Пятница' }
    }, // 23
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Вторник Суббота' }
    }, // 24
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '13:00-13:30 Выходные дни' }
    }, // 25
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Суббота или воскресенье' }
    }, // 26
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '1-2' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '12:00-14:00 Вторник Пятница' }
    }, // 27
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '21:00-21:30 Понедельник Среда Пятница' }
    }, // 28
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Понедельник Среда Пятница' }
    }, // 29
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:30-21:30 Понедельник Четверг' }
    }, // 30
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '17:00-17:30 Вторник Четверг Суббота' }
    }, // 31
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '17:00-18:00 Вторник Четверг Суббота' }
    }, // 32
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '17:00-19:00 Понедельник Вторник Пятница Суббота' }
    }, // 33
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '14:00-14:30 Понедельник Среда Суббота или воскресенье' }
    }, // 34
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '14:00-15:00 Понедельник Среда Суббота или воскресенье' }
    }, // 35
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:30-17:30 Понедельник Thurday Суббота или воскресенье' }
    }, // 36
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '19:00-19:30 Вторник Пятница Суббота' }
    }, // 37
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:30-21:30 Понедельник Среда Пятница Суббота' }
    }, // 38
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '18:00-20:00 Понедельник Среда Суббота' }
    }, // 39
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Вторник Четверг Суббота' }
    }, // 40
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Вторник Четверг Суббота' }
    }, // 41
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:30-11:30 Вторник Пятница Суббота' }
    }, // 42
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Понедельник Четверг Пятница' }
    }, // 43
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:30 Среда Пятница Суббота' }
    }, // 44
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Вторник Пятница Суббота' }
    }, // 45
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Понедельник Четверг Суббота' }
    }, // 46
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Вторник Среда Суббота или воскресенье' }
    }, // 47
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Понедельник Четверг Суббота' }
    }, // 48
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Понедельник Среда Суббота или воскресенье' }
    }, // 49
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Понедельник Среда Пятница' }
    }, // 50
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Вторник Четверг Суббота' }
    }, // 51
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:00 Понедельник Четверг Суббота или воскресенье' }
    }, // 52
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Понедельник Четверг Суббота или воскресенье' }
    }, // 53
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '3-4' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '11:00-13:00 Вторник Пятница Суббота или воскресенье' }
    }, // 54
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '20:00-20:30 Будние дни' }
    }, // 55
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '20:00-21:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 56
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Будние дни' }
    }, // 57
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '19:30-20:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 58
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '18:00-19:00 Будние дни' }
    }, // 59
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '17:30-19:30 Будние дни' }
    }, // 60
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '15:00-15:30 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 61
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '15:00-16:00 Будние дни' }
    }, // 62
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'morning' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '15:00-17:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 63
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '21:00-21:30 Будние дни' }
    }, // 64
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '19:00-20:00 Будние дни' }
    }, // 65
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '19:00-21:00 Будние дни' }
    }, // 66
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:00-10:30 Будние дни' }
    }, // 67
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '10:00-11:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 68
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '10:00-12:00 Будние дни' }
    }, // 69
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '10:30-11:00 Будние дни' }
    }, // 70
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:00-10:00 Будние дни' }
    }, // 71
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'afternoon' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 72
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 73
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '11:00-12:00 Будние дни' }
    }, // 74
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'sleep better' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '11:00-13:00 Будние дни' }
    }, // 75
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '09:00-09:30 Будние дни' }
    }, // 76
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '09:30-10:30 Будние дни' }
    }, // 77
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'training' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '09:00-11:00 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 78
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'short' }
        ],
        conclusion: { attribute: 'result', value: '11:00-11:30 Понедельник Вторник Четверг Пятница Суббота' }
    }, // 79
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'medium' }
        ],
        conclusion: { attribute: 'result', value: '12:00-13:00 Будние дни' }
    }, // 80
    {
        premises: [
            { attribute: 'category', value: 'sport' },
            { attribute: 'occurrence', value: '5+' },
            { attribute: 'no_time', value: 'evening' },
            { attribute: 'reason', value: 'enjoy' },
            { attribute: 'duration', value: 'long' }
        ],
        conclusion: { attribute: 'result', value: '12:00-14:00  Будние дни' }
    }, // 81

];

export default variants;