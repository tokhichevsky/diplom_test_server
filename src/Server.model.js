const CSVFields = {
  first_name: "Имя",
  last_name: "Фамилия",
  patronymic: "Отчество",
  sex: "Пол",
  age: "Возраст",
  job: "Сфера деятельности",

  //----
  title_music_education: "Музыкальное образование",
  //----
  music_education_years: "Время",
  music_instrument: "Специальность",

  //----
  title_another_information: "Другое",
  //----
  visiting_concerts_frequency: "Частота посещения клубов\\концертов",
  music_listening_frequency: "Частота прослушивания музыки в наушниках",
  noise_level: "Уровень шума на рабочем месте",
  //----
  title_pull: "Определение типа восприятия",
  poll_digital: "Дигитал",
  poll_audio: "Аудиал",
  poll_visual: "Визуал",
  poll_kinesthetic: "Кинестетик",
  //---- [26, 38, 64, 101, 156, 179]
  title_test: "Эксперимент",
  title_stage_1: "Этап 1",
  title_stage_1_interval_26: "(26)",
  stage_1_interval_26_estimate: "(26) Оценка",
  stage_1_interval_26_estimate_table_stat_correct: "(26) Оценка.Правильно решенные таблицы",
  stage_1_interval_26_estimate_table_stat_wrong: "(26) Оценка.Неправильно решенные таблицы",
  stage_1_interval_26_create: "(26) Создание",
  stage_1_interval_26_create_table_stat_correct: "(26) Создание.Правильно решенные таблицы",
  stage_1_interval_26_create_table_stat_wrong: "(26) Создание.Неправильно решенные таблицы",
  title_stage_1_interval_38: "(38)",
  stage_1_interval_38_estimate: "(38) Оценка",
  stage_1_interval_38_estimate_table_stat_correct: "(38) Оценка.Правильно решенные таблицы",
  stage_1_interval_38_estimate_table_stat_wrong: "(38) Оценка.Неправильно решенные таблицы",
  stage_1_interval_38_create: "(38) Создание",
  stage_1_interval_38_create_table_stat_correct: "(38) Создание.Правильно решенные таблицы",
  stage_1_interval_38_create_table_stat_wrong: "(38) Создание.Неправильно решенные таблицы",
  title_stage_1_interval_64: "(64)",
  stage_1_interval_64_estimate: "(64) Оценка",
  stage_1_interval_64_estimate_table_stat_correct: "(64) Оценка.Правильно решенные таблицы",
  stage_1_interval_64_estimate_table_stat_wrong: "(64) Оценка.Неправильно решенные таблицы",
  stage_1_interval_64_create: "(64) Создание",
  stage_1_interval_64_create_table_stat_correct: "(64) Создание.Правильно решенные таблицы",
  stage_1_interval_64_create_table_stat_wrong: "(64) Создание.Неправильно решенные таблицы",
  title_stage_1_interval_101: "(101)",
  stage_1_interval_101_estimate: "(101) Оценка",
  stage_1_interval_101_estimate_table_stat_correct: "(101) Оценка.Правильно решенные таблицы",
  stage_1_interval_101_estimate_table_stat_wrong: "(101) Оценка.Неправильно решенные таблицы",
  stage_1_interval_101_create: "(101) Создание",
  stage_1_interval_101_create_table_stat_correct: "(101) Создание.Правильно решенные таблицы",
  stage_1_interval_101_create_table_stat_wrong: "(101) Создание.Неправильно решенные таблицы",
  title_stage_1_interval_156: "(156)",
  stage_1_interval_156_estimate: "(156) Оценка",
  stage_1_interval_156_estimate_table_stat_correct: "(156) Оценка.Правильно решенные таблицы",
  stage_1_interval_156_estimate_table_stat_wrong: "(156) Оценка.Неправильно решенные таблицы",
  stage_1_interval_156_create: "(156) Создание",
  stage_1_interval_156_create_table_stat_correct: "(156) Создание.Правильно решенные таблицы",
  stage_1_interval_156_create_table_stat_wrong: "(156) Создание.Неправильно решенные таблицы",
  title_stage_1_interval_179: "(179)",
  stage_1_interval_179_estimate: "(179) Оценка",
  stage_1_interval_179_estimate_table_stat_correct: "(179) Оценка.Правильно решенные таблицы",
  stage_1_interval_179_estimate_table_stat_wrong: "(179) Оценка.Неправильно решенные таблицы",
  stage_1_interval_179_create: "(179) Создание",
  stage_1_interval_179_create_table_stat_correct: "(179) Создание.Правильно решенные таблицы",
  stage_1_interval_179_create_table_stat_wrong: "(179) Создание.Неправильно решенные таблицы",
  //----
  title_stage_2: "Этап 2",
  title_stage_2_interval_26: "(26)",
  metronom: "Метроном",
  stage_2_interval_26_estimate: "(26) Оценка",
  stage_2_interval_26_estimate_table_stat_correct: "(26) Оценка.Правильно решенные таблицы",
  stage_2_interval_26_estimate_table_stat_wrong: "(26) Оценка.Неправильно решенные таблицы",
  stage_2_interval_26_create: "(26) Создание",
  stage_2_interval_26_create_table_stat_correct: "(26) Создание.Правильно решенные таблицы",
  stage_2_interval_26_create_table_stat_wrong: "(26) Создание.Неправильно решенные таблицы",
  title_stage_2_interval_38: "(38)",
  stage_2_interval_38_estimate: "(38) Оценка",
  stage_2_interval_38_estimate_table_stat_correct: "(38) Оценка.Правильно решенные таблицы",
  stage_2_interval_38_estimate_table_stat_wrong: "(38) Оценка.Неправильно решенные таблицы",
  stage_2_interval_38_create: "(38) Создание",
  stage_2_interval_38_create_table_stat_correct: "(38) Создание.Правильно решенные таблицы",
  stage_2_interval_38_create_table_stat_wrong: "(38) Создание.Неправильно решенные таблицы",
  title_stage_2_interval_64: "(64)",
  stage_2_interval_64_estimate: "(64) Оценка",
  stage_2_interval_64_estimate_table_stat_correct: "(64) Оценка.Правильно решенные таблицы",
  stage_2_interval_64_estimate_table_stat_wrong: "(64) Оценка.Неправильно решенные таблицы",
  stage_2_interval_64_create: "(64) Создание",
  stage_2_interval_64_create_table_stat_correct: "(64) Создание.Правильно решенные таблицы",
  stage_2_interval_64_create_table_stat_wrong: "(64) Создание.Неправильно решенные таблицы",
  title_stage_2_interval_101: "(101)",
  stage_2_interval_101_estimate: "(101) Оценка",
  stage_2_interval_101_estimate_table_stat_correct: "(101) Оценка.Правильно решенные таблицы",
  stage_2_interval_101_estimate_table_stat_wrong: "(101) Оценка.Неправильно решенные таблицы",
  stage_2_interval_101_create: "(101) Создание",
  stage_2_interval_101_create_table_stat_correct: "(101) Создание.Правильно решенные таблицы",
  stage_2_interval_101_create_table_stat_wrong: "(101) Создание.Неправильно решенные таблицы",
  title_stage_2_interval_156: "(156)",
  stage_2_interval_156_estimate: "(156) Оценка",
  stage_2_interval_156_estimate_table_stat_correct: "(156) Оценка.Правильно решенные таблицы",
  stage_2_interval_156_estimate_table_stat_wrong: "(156) Оценка.Неправильно решенные таблицы",
  stage_2_interval_156_create: "(156) Создание",
  stage_2_interval_156_create_table_stat_correct: "(156) Создание.Правильно решенные таблицы",
  stage_2_interval_156_create_table_stat_wrong: "(156) Создание.Неправильно решенные таблицы",
  title_stage_2_interval_179: "(179)",
  stage_2_interval_179_estimate: "(179) Оценка",
  stage_2_interval_179_estimate_table_stat_correct: "(179) Оценка.Правильно решенные таблицы",
  stage_2_interval_179_estimate_table_stat_wrong: "(179) Оценка.Неправильно решенные таблицы",
  stage_2_interval_179_create: "(179) Создание",
  stage_2_interval_179_create_table_stat_correct: "(179) Создание.Правильно решенные таблицы",
  stage_2_interval_179_create_table_stat_wrong: "(179) Создание.Неправильно решенные таблицы",
  //----
  title_stage_3: "Этап 3",
  title_stage_3_interval_26: "(26)",
  stage_3_interval_26_estimate: "(26) Оценка",
  stage_3_interval_26_estimate_table_stat_correct: "(26) Оценка.Правильно решенные таблицы",
  stage_3_interval_26_estimate_table_stat_wrong: "(26) Оценка.Неправильно решенные таблицы",
  stage_3_interval_26_create: "(26) Создание",
  stage_3_interval_26_create_table_stat_correct: "(26) Создание.Правильно решенные таблицы",
  stage_3_interval_26_create_table_stat_wrong: "(26) Создание.Неправильно решенные таблицы",
  title_stage_3_interval_38: "(38)",
  stage_3_interval_38_estimate: "(38) Оценка",
  stage_3_interval_38_estimate_table_stat_correct: "(38) Оценка.Правильно решенные таблицы",
  stage_3_interval_38_estimate_table_stat_wrong: "(38) Оценка.Неправильно решенные таблицы",
  stage_3_interval_38_create: "(38) Создание",
  stage_3_interval_38_create_table_stat_correct: "(38) Создание.Правильно решенные таблицы",
  stage_3_interval_38_create_table_stat_wrong: "(38) Создание.Неправильно решенные таблицы",
  title_stage_3_interval_64: "(64)",
  stage_3_interval_64_estimate: "(64) Оценка",
  stage_3_interval_64_estimate_table_stat_correct: "(64) Оценка.Правильно решенные таблицы",
  stage_3_interval_64_estimate_table_stat_wrong: "(64) Оценка.Неправильно решенные таблицы",
  stage_3_interval_64_create: "(64) Создание",
  stage_3_interval_64_create_table_stat_correct: "(64) Создание.Правильно решенные таблицы",
  stage_3_interval_64_create_table_stat_wrong: "(64) Создание.Неправильно решенные таблицы",
  title_stage_3_interval_101: "(101)",
  stage_3_interval_101_estimate: "(101) Оценка",
  stage_3_interval_101_estimate_table_stat_correct: "(101) Оценка.Правильно решенные таблицы",
  stage_3_interval_101_estimate_table_stat_wrong: "(101) Оценка.Неправильно решенные таблицы",
  stage_3_interval_101_create: "(101) Создание",
  stage_3_interval_101_create_table_stat_correct: "(101) Создание.Правильно решенные таблицы",
  stage_3_interval_101_create_table_stat_wrong: "(101) Создание.Неправильно решенные таблицы",
  title_stage_3_interval_156: "(156)",
  stage_3_interval_156_estimate: "(156) Оценка",
  stage_3_interval_156_estimate_table_stat_correct: "(156) Оценка.Правильно решенные таблицы",
  stage_3_interval_156_estimate_table_stat_wrong: "(156) Оценка.Неправильно решенные таблицы",
  stage_3_interval_156_create: "(156) Создание",
  stage_3_interval_156_create_table_stat_correct: "(156) Создание.Правильно решенные таблицы",
  stage_3_interval_156_create_table_stat_wrong: "(156) Создание.Неправильно решенные таблицы",
  title_stage_3_interval_179: "(179)",
  stage_3_interval_179_estimate: "(179) Оценка",
  stage_3_interval_179_estimate_table_stat_correct: "(179) Оценка.Правильно решенные таблицы",
  stage_3_interval_179_estimate_table_stat_wrong: "(179) Оценка.Неправильно решенные таблицы",
  stage_3_interval_179_create: "(179) Создание",
  stage_3_interval_179_create_table_stat_correct: "(179) Создание.Правильно решенные таблицы",
  stage_3_interval_179_create_table_stat_wrong: "(179) Создание.Неправильно решенные таблицы",
};

module.exports.CSVHeaders = Object.entries(CSVFields).map(([id, title]) => ({id, title}));

module.exports.getRows = (data) => {
  function checkIsDigital(results) {
    const values = Object.values(results);

    if (Math.max(...values) > 8) return false;

    const average = values.reduce((sum, score) => sum + score, 0) / values.length;

    return values.reduce((isDigital, score) => isDigital && score >= (average - 2) && score <= (average + 2), true);
  }

  function calculatePerceptionChannel(poll) {
    const audioQuestions = [2, 6, 7, 13, 15, 17, 20, 24, 26, 33, 34, 36, 37, 43, 46, 48];
    const visualQuestions = [1, 5, 8, 10, 12, 14, 19, 21, 23, 27, 31, 32, 39, 40, 42, 45];
    const kinestheticQuestions = [3, 4, 9, 11, 16, 18, 22, 25, 28, 29, 30, 35, 38, 41, 44, 47];

    const results = {
      poll_audio: 0,
      poll_visual: 0,
      poll_kinesthetic: 0,
    };

    const getType = (index) => {
      return audioQuestions.includes(index + 1)
        ? "poll_audio"
        : visualQuestions.includes(index + 1)
          ? "poll_visual"
          : "poll_kinesthetic";
    };

    Object.values(poll).forEach((value, index) => {
      results[getType(index)] += +value;
    });

    return results;
  }

  function calculateTestStages(test) {
    const result = {};

    if(!test) return test;

    Object.entries(test).forEach(([stageName, stageData]) => {
      result[`title_${stageName}`] = "";

      Object.entries(stageData).forEach(([interval, intervalData]) => {
        result[`title_${stageName}_interval_${interval}`] = "";
        result[`${stageName}_interval_${interval}_estimate`] = intervalData.Estimate.time;
        result[`${stageName}_interval_${interval}_estimate_table_stat_correct`] = intervalData.Estimate.tablesScore.correct;
        result[`${stageName}_interval_${interval}_estimate_table_stat_wrong`] = intervalData.Estimate.tablesScore.wrong;
        result[`${stageName}_interval_${interval}_create`] = intervalData.Create.time;
        result[`${stageName}_interval_${interval}_create_table_stat_correct`] = intervalData.Create.tablesScore.correct;
        result[`${stageName}_interval_${interval}_create_table_stat_wrong`] = intervalData.Create.tablesScore.wrong;

      });
    });
    return result;
  }

  const result = []

  data.forEach(user => {
    if (!user.poll || !user.test) return;

    const pullResults = user.poll ? calculatePerceptionChannel(user.poll) : {};
    result.push({
      first_name: user.first_name,
      last_name: user.last_name,
      patronymic: user.patronymic,
      sex: user.sex,
      age: user.age,
      job: user.job,

      //----
      title_music_education: "",
      //----
      music_education_years: user.music_education_years,
      music_instrument: user.music_instrument,

      //----
      title_another_information: "",
      //----
      visiting_concerts_frequency: user.visiting_concerts_frequency,
      music_listening_frequency: user.music_listening_frequency,
      noise_level: user.noise_level,
      //----
      title_poll: "",
      poll_digital: user.poll ? checkIsDigital(pullResults) : null,
      ...pullResults,
      //---- [26, 38, 64, 101, 156, 179]
      title_test: "",
      ...calculateTestStages(user.test),
      metronom: user._id % 2 === 0 ? 140 : 35,
    });
  });

  return result;
}
