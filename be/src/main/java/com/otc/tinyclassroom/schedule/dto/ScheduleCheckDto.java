package com.otc.tinyclassroom.schedule.dto;

import java.time.LocalDate;

/**
 * 스케줄 중복 체크를 위한 Dto.
 *
 * @param id           스케줄 pk.
 * @param memberId     스케줄을 보유한 멤버의 pk.
 * @param scheduleDate 강의 날짜.
 * @param dayOfWeek    강의 요일.
 * @param timeTable    강의 교시.
 * @param deletable    삭제 가능 여부. 관리자가 해당 스케줄을 추가했으면 false.
 */
public record ScheduleCheckDto(Long id, Long memberId, LocalDate scheduleDate, int dayOfWeek, int timeTable, Boolean deletable) {

    public static ScheduleCheckDto of(Long id, Long memberId, LocalDate scheduleDate, int dayOfWeek, int timeTable, Boolean deletable) {
        return new ScheduleCheckDto(id, memberId, scheduleDate, dayOfWeek, timeTable, deletable);
    }
}
